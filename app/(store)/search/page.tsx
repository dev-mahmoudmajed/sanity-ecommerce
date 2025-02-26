

async function page({searchParams}:{searchParams:{query:string}}) {
  const {query}=await searchParams;
  return (
    <div>
      Search Page for {query} 
    </div>
  );
}

export default page;
