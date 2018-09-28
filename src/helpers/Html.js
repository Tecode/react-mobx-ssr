import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash/fp';

const Html = ({ componentHTML, initData }) => {
  const helmet = Helmet.renderStatic();
  const assets = global.webpackIsomorphicTools.assets();
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content="aming" />
        <title>React服务端渲染</title>
        { helmet.title.toComponent() }
        { helmet.base.toComponent() }
        { helmet.meta.toComponent() }
        { helmet.link.toComponent() }
        <link
          href="/vendors/css/antd.min.css"
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
        />
        {_.keys(assets.styles).map(style => (
          <link
            key={_.uniqueId()}
            href={assets.styles[style]}
            media="screen, projection"
            rel="stylesheet"
            type="text/css"
          />
        ))}
      </head>
      <body>
        <div id="app">
          { componentHTML } 
        </div>
      </body>
      <script dangerouslySetInnerHTML={{ __html: initData  }} />
      <script key={_.uniqueId()} src={assets.javascript.vendor} />
      <script id="mainJs" key={_.uniqueId()} src={assets.javascript.main} />
    </html>
  )
}

export default Html;