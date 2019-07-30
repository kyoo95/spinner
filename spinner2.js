const circle = "\r|\r/\r-\r\\\r| "
for(let i = 0; i < circle.length; i++) {
  setTimeout(() => {
    process.stdout.write(circle[i]);
  }, 200*i)
};
