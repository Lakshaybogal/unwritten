"use client"
import Home from '@/Home/page'
import useFetch from './hooks/useFetch';
// async function fetchCategories()
// {
//   const options={
//     headers:{
//       Authorization:`Bearer ${process.env.STRAPI_API_TOKEN}`
//     }
//   }
//   try{
//     const res=await fetch('http://localhost:1337/api/categories',options);
//     const response=await res.json();
//    const data1=response.data;
//     console.log(data1);
//     console.log("working")
//     return response;
//   }catch(err){
// console.log(err);
//   }
// }


// App.js


const App = () => {
  const STRAPI_API_TOKEN = "77f0be45141eaed5ffd6a9addd0d0b195806e52ff1cf51b8dc8c41391854ad46addafa58e31112b90c75909b731d56b6ee6913e101d86b23627f66f5ddeffe5ab1cc378f8ec77cfbfed1d348f852f419967fc7499f5d97dac571862a728388dc84947be001f4825ab8e21a5e425cd0dcad01e6e6153a270876258af9ff58a239";
  const { data, error, loading } = useFetch('http://localhost:1337/api/blogs', STRAPI_API_TOKEN);

  console.log(data);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div>
      {data.map(data => (
        <div key={data.id}>
          <div>
            {data.attributes.Title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
