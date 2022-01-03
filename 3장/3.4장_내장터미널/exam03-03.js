const arr = [1,2,3];

arr.forEach(alert); 
/* alert는 브라우저에서만 동작하는 클라이언트 사이트 Web API여서
브라우저에서만 쓸 수 있으므로 node 환경에서는 ReferenceError나는게 정상이다. */
