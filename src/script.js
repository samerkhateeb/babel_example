async function myFunction() {
  try {
    const res = await fetch("http://httpbin.org");
    data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
