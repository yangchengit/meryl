with(require('connect')) {
  require('../../index')  
    .fabby
      (logger())
      (staticProvider())
      ('GET /', function(req, resp) {
          resp.render('home');
        }
      )
      ('GET /posts/{postid}', function(req, resp) {
          resp.render('home');
        }
      ) 
      ('GET /posts/{postid}/comments/{commentid}', function(req, resp) {
          resp.render('home');
        }
      )  
      ();
}

console.log('listening...');

