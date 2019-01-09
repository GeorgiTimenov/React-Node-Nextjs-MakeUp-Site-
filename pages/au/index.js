import Head from 'next/head'
import Index from '../index';

const  au = () =>{
  return(<div>
    <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"http://schema.org","@type":"BreadcrumbList","itemListElement":[
            {"@type":"ListItem","position":1,"name":"Australia","item":"https://flayr.io/au"},
          `}}>
        </script>
    </Head>
    <Index state={false}/>
  </div>)
}
export default au;