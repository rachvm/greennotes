const data = [
  {
    topic_category: "Design & Content",
    topic: "Choose fonts carefully",
    topic_blurb:
      "Web fonts can enhance the visual appeal of websites but can add significant file weight to the websites on which they are used. A single font file could be as much as 250kb, and that might only be for the standard weight. If you want bold, add another 250kb!",
    best_practice:
      "Use system fonts where possible. They are not always as pretty, but fonts such as Arial and Times New Roman can be used without loading any font files at all as they are already on the users device. Use less font variations. You may feel the need to use custom web fonts, but try to be frugal in the number of typefaces you choose and in the number of different weights that you use for each typeface.",
    article_link:
      "https://www.wholegraindigital.com/blog/website-energy-efficiency/",
  },
  {
    topic_category: "Development",
    topic: "Use less JavaScript",
    topic_blurb:
      "JS impacts website efficiency in two ways: by adding file weight to the web page and by increasing the amount of processing required by the users device. The second of these is something that applies to JS much more than to other types of files. Functionality driven by JS is processed on the users computer or phone and increases CPU usage, which in turn increases the energy consumption of the device. Hear those cooling fans on your laptop whirring? That’s energy being wasted.",
    best_practice:
      "Look for ways to achieve front end interactions, functionality and animations using more efficient technologies like CSS, or at least use JS efficiently. A particular mention should be given here to tracking and advertising scripts that rarely offer any value to the user but can add significant file weight, cause significant CPU usage, slow websites down and invade their privacy. The new web inspector in Safari has a useful tool to help assess the energy impact of a web page on the end user device",
    article_link:
      "https://www.wholegraindigital.com/blog/website-energy-efficiency/",
  },
  {
    topic_category: "Web Hosting",
    topic: "Use a data centre close to your users",
    topic_blurb:
      "A lot of the energy used by the internet is used to transmit data through the telecoms networks. It goes without saying that the further the information has to travel, the more energy it uses on its journey. Therefore, selecting a data centre close to your target audience will help reduce energy consumption.",
    best_practice:
      "For example, you might find a cheap web hosting package from a US based hosting company, but if your target visitors are in the UK or Germany then energy will be wasted transmitting data across the Atlantic. What’s more, this additional distance can cause a delay in page load times too, so locating your website in a  data centre close to your main audience will be good for user experience and for the planet.",
    article_link:
      "https://www.wholegraindigital.com/blog/website-energy-efficiency/",
  },
  {
    topic_category: "Development",
    topic: "Build static web pages",
    topic_blurb:
      "CMS powered websites make queries to the website database and dynamically generate pages. In simple terms, it means that the web server has to do work thinking about what information to send back to the user each time someone tries to load a page, and that causes the server to use more energy. ",
    best_practice:
      "Use a server caching technology, but in some cases it may be possible to simply server static web pages with no database at all. This can be achieved by writing the web pages as static files in HTML, CSS and JS, or by using a static site generator or specialist static web host to convert your CMS powered website into static files.",
    article_link:
      "https://www.wholegraindigital.com/blog/website-energy-efficiency/",
  },
  {
    topic_category: "Design & Content",
    topic: "Reduce images",
    topic_blurb:
      "On most websites, images are the single largest contributors to page weight. The more images you use and the larger those image files, the more data needs to be transferred and the more energy is used. Regardless of any technical optimisations, designers and content creators should think carefully about their use of images.",
    best_practice:
      "Asking the following questions: Does the image genuinely add value to the user? Does it communicate useful information? Could the same impact be achieved if the image was smaller? Could we reduce images that are not visible to the user, such as in carousels? Could we achieve the same effect with a vector graphic (or even CSS style) instead of a photo?",
    article_link:
      "https://www.wholegraindigital.com/blog/website-energy-efficiency/",
  },
  {
    topic_category: "Development",
    topic: "How CommonJS is making your bundles larger",
    topic_blurb:
      "Learn how CommonJS modules are impacting the tree-shaking of your application. It's much harder to analyze CommonJS modules since they are dynamic by definition. For example, the import location in ES modules is always a string literal, compared to CommonJS, where it is an expression.",
    best_practice:
      "To ensure the bundler can successfully optimize your application, avoid depending on CommonJS modules, and use ECMAScript module syntax in your entire application. Use Rollup.js's node-resolve plugin and set the modulesOnly flag to specify that you want to depend only on ECMAScript modules. Use the package is-esm to verify that an npm package uses ECMAScript modules. If you're using Angular, by default you'll get a warning if you depend on non-tree-shakeable modules.",
    article_link:
      "https://www.wholegraindigital.com/blog/website-energy-efficiency/",
  },
];

export default data;
