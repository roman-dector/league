import ReactPlayer from 'react-player'

export function VideoPlayer() {
  return (
    <>
      <iframe
        src='https://vk.com/video_ext.php?oid=-222990079&id=456239017&hd=2&hash=a9ff0eaa5448c788'
        width='853'
        height='480'
        allow='autoplay; encrypted-media; fullscreen; picture-in-picture;'
        allowFullScreen
      ></iframe>
    </>
  )
}
