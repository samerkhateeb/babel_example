# babel Addon
this is a quick simulation on how to Use Babel in your code, 
i put the ReactCode in the script.js on the src folder, 
    "@babel/cli": "^7.21.0",
    "@babel/core": "^7.21.0",
    "@babel/preset-env": "^7.20.2"

then i created "babel.config.json" file and i put the following configuration inside it:
```
{
    "presets": [
        "@babel/preset-env"
    ]
}
```


after that, i opened the terminal, and write the code:
yearn build

it converts the code from :
```
async function myFunction() {
  try {
    const res = await fetch("http://httpbin.org");
    data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
```

to 

