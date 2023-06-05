import { ImageResponse } from 'next/server';
export const runtime = 'edge';
 
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

const favicon = {
  img: '/public/img/favicon.png',
}

export const Fav = favicon;

type IconProps = {
  params:{
    img:string;
    
  }
}
export default async function Icon({params}:IconProps ) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          borderRadius: '10px'
        }}
      >EH
      </div>
    ),
    {
      ...size,
    },
  );
}