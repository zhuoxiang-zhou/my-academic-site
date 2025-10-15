import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          fontFamily: 'sans-serif',
        }}
      >
        ZZ
      </div>
    ),
    {
      ...size,
    }
  )
}