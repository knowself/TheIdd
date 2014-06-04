package org.scalatra.example

import org.scalatra._

class HerokuApp extends ScalatraServlet {

  get("/") {
    <html>
      <body>
        <h1>TheIdd, Synthetic Intelligence at your service!</h1>
      </body>
    </html>
  }
}
