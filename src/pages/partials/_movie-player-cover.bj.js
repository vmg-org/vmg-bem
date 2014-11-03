module.exports = {
  // link to video loaded with movie info
  // inserted using javascript (create a video element dynamically)
  block: 'movie-player-cover', // this is like movie-records
  retry: 3,
  demo: true,
  content: ['_wch-player.bj.js']
    //   // insert only link to video (at this moment)
    //   block: 'movie-player',
    //   mdl: 'movie_record',
    //   content: [{
    //     elem: 'video',
    //     tag: 'video',
    //     mix: [{
    //       block: 'video-js',
    //       bem: false
    //     }, {
    //       block: 'vjs-default-skin',
    //       bem: false
    //     }],
    //     attrs: {
    //       controls: true,
    //       'data-setup': '{"width": "100%", "height": "100%"}'
    //     },
    //     content: [{
    //       elem: 'source1',
    //       tag: 'source',
    //       bem: false,
    //       attrs: {
    //         type: 'video/mp4',
    //         src: 'https://s3.amazonaws.com/vmg-bucket/converted/966808401-web.mp4', // @@video_url
    //       }
    //     }]
    //   }]
    // }]
};
