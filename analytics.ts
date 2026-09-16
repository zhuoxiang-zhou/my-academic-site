// GA4 measurement IDs are public identifiers embedded in the delivered site.
const defaultMeasurementId = 'G-WMSFC0CBDE';
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || defaultMeasurementId;

type GtagArguments = [command: string, ...parameters: unknown[]];

declare global {
  interface Window {
    dataLayer: IArguments[];
    gtag: (...args: GtagArguments) => void;
  }
}

let analyticsEnabled = false;
let previousPageLocation: string | undefined;

function trackAnnotatedClick(event: MouseEvent): void {
  if (!(event.target instanceof Element)) return;

  const trackedElement = event.target.closest<HTMLElement>('[data-analytics-event]');
  const eventName = trackedElement?.dataset.analyticsEvent;
  if (!trackedElement || !eventName) return;

  const link = trackedElement instanceof HTMLAnchorElement ? trackedElement : null;
  trackEvent(eventName, {
    link_location: trackedElement.dataset.analyticsLocation || 'unknown',
    link_text: trackedElement.textContent?.trim() || '',
    link_url: link?.getAttribute('href') || '',
  });
}

/** Load GA4 only for production builds with a valid measurement ID. */
export function initializeAnalytics(): void {
  if (
    typeof window === 'undefined'
    || !import.meta.env.PROD
    || !measurementId
    || !/^G-[A-Z0-9]+$/i.test(measurementId)
  ) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(..._args: GtagArguments): void {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  document.addEventListener('click', trackAnnotatedClick);
  analyticsEnabled = true;
}

/** Record one virtual pageview for the site's hash-based routes. */
export function trackPageView(pathname: string, pageTitle: string): void {
  if (!analyticsEnabled) return;

  const pageLocation = new URL(pathname, window.location.origin).href;
  window.gtag('event', 'page_view', {
    page_location: pageLocation,
    page_referrer: previousPageLocation || document.referrer,
    page_title: pageTitle,
  });
  previousPageLocation = pageLocation;
}

/** Record a named interaction without collecting personal information. */
export function trackEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
): void {
  if (!analyticsEnabled) return;
  window.gtag('event', eventName, parameters);
}
