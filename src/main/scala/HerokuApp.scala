package org.scalatra.example

import org.scalatra._

class HerokuApp extends ScalatraServlet {

  get("/") {
    <html>
      <body>
        <h1>TheIdd is a Scalatra App!</h1>
      </body>
    </html>
  }
}
