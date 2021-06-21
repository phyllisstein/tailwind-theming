import { useCallback, useEffect, useRef } from 'react';
import pWaitFor from 'p-wait-for';

let SDK_READY = false;

global.onYouTubeIframeAPIReady ||= function() {
  SDK_READY = true;
}

function useYouTube(videoId, playerConfig) {
  const playerInstance = useRef();
  const targetElement = useRef();

  useEffect(() => {
    if (SDK_READY) return;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }, [SDK_READY]);

  useEffect(async () => {
    await pWaitFor(() => SDK_READY);

    if (!targetElement.current) return;

    playerInstance.current = new YT.Player(targetElement.current, {
      height: '360',
      width: '640',
      ...playerConfig,
      videoId,
    })
  }, [SDK_READY, videoId]);

  const bindFunction = useCallback(() => {
    return {
      ref: element => targetElement.current = element,
    };
  });

  return bindFunction;
}

export default useYouTube;
