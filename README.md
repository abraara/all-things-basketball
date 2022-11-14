# Next Best Developer Project
 This is the README for the Next Best Developer Project that will be completed during the course of DMIT2008.

 <br/>

##  What Will Be Created
A full project consisting of the best developers in North America that can be accessed and contacted to help you find the best developer for your business.

 <br/>
<br/>


### GitHub Repository
This is link to the GitHub repository for the project [GitHub Repository](https://github.com/abraara/next-best-developer.git).   

 <br/>

### Vercel Site Deployment URL 
This is the link to the Vercel Site Deployment for the project [Vercel Site Deployment](https://vercel.com/login).  

<br/>

## Setting Up Tailwindcss
To setup and configure Tailwindcss you can either download the starter template from Next.js or you can cusomize the configuration by following the guide on the Tailwind site [Tailwindcss with Next](https://nextra.vercel.app/get-started#quick-start-with-vercel). 

### Tailwind Resources
1. [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
2. [Tailwind Playground](https://play.tailwindcss.com/)
3. [Tailwind Templates](https://tailwindui.com/templates)
4. [Tailwind Components](https://tailwindui.com/templates)
5. [DaisyUI Component Library](https://daisyui.com/)

```jsx
<div className="bg-gradient-to-br from-blue-500 to-blue-400 via-sky-500  w-full h-screen flex justify-center items-center">
    <header className="text-center">
        <h1 className=" text-4xl md:text-6xl lg:text-8xl   font-extrabold text-gray-200 pb-2">
        Deploying To Vercel
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl text-gray-800/50">setting up a continuous integration continuous deployment workflow.</p>
    </header>
</div>

```

## Setting NEXT.js Page Head Element
By default the _app component adds the head element with some default settings. You need to set this on a page basis using the next/head component. If you have a favourite html framework you can grab that boiler plate markup and copy it to the next/head component as demonstratated.      

```jsx
   <Head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Tutorial on how to configure NEXT.js with tailwindcss.">
      <title>Learning React Vercel Deployment</title>
    </Head>
```




```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
}

module.exports = nextConfig


```