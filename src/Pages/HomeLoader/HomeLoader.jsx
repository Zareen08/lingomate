export const homeLoader = async () => {
  const tutorialsRes = await fetch('https://lingomate-server-site.vercel.app/featured-tutorials');
  const categoriesRes = await fetch('https://lingomate-server-site.vercel.app/categories');
  
  const tutorials = await tutorialsRes.json();
  const categories = await categoriesRes.json();

  return { tutorials, categories };
};