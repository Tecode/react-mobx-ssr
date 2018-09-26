import React from 'react';

const Article = () => (
    <p>MN2018-09-19T07:52:12.383Z - info: Application env: development
    2018-09-19T07:52:12.947Z - info: HTTP server is now running on http://localhost:3001
    webpack built 2400ef2b021b433f8527 in 5849ms
    2018-09-19T07:52:18.328Z - info: Hash: 2400ef2b021b433f8527
    Version: webpack 4.8.1
    Time: 5849ms
    Built at: 2018-09-19 15:52:18
                                   Asset       Size  Chunks             Chunk Names
    imgs/BiazfanxmamNRoxxVxka.fda383.png   51.9 KiB          [emitted]  
                                 main.js    146 KiB    main  [emitted]  main
                         vendor.chunk.js     10 MiB  vendor  [emitted]  vendor
                             client.html  626 bytes          [emitted]  
    Entrypoint main = vendor.chunk.js main.js

        + 830 hidden modules
    Child html-webpack-plugin for "client.html":
              Asset      Size  Chunks  Chunk Names
        client.html  27.9 KiB       0  
        Entrypoint undefined = client.html
        [./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html] 569 bytes {0} [built]
    2018-09-19T07:52:18.329Z - info: Compiled successfully.
    2018-09-19T07:52:18.484Z - info: ::1 - GET /article - 200 - 0.055s
    2018-09-19T07:52:18.531Z - info: ::1 - GET /[object%20Object] - 200 - 0.019s
    2018-09-19T07:52:18.544Z - info: ::1 - GET /vendor.chunk.js - 304 - 0.013s
    2018-09-19T07:52:18.548Z - info: ::1 - GET /main.js - 200 - 0.001s
    2018-09-19T07:52:19.492Z - info: ::1 - GET /imgs/BiazfanxmamNRoxxVxka.fda383.png - 200 - 0.001s
    2018-09-19T07:52:19.676Z - info: ::1 - GET /favicon.ico - 200 - 0.012s
    2018-09-19T07:52:21.560Z - info: ::1 - GET /favicon.ico - 304 - 0.016s
    </p>
);

export default Article;