const channel = {
  channelName: "Fras Irfan",
  videos: {
    firstVideo: {
      title: "Video 1",
      length: "12 Mins",
      views: 300,
    },
    secondLastVideo: {
      title: "Video 2",
      length: "10 Mins",
      views: 250,
    },
    lastVideo: {
      title: "Video 3",
      length: "15 Mins",
      views: 400,
    },
  },
};

console.log(channel.channelName);
console.log(channel.videos.secondLastVideo.views);
console.log(channel.videos.lastVideo.length);