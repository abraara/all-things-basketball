import ContentPageLayout from '../components/layouts/ContentPageLayout';

function CenterPage( ) {
   
    return ( 
      <>

      <main>


      </main>
 
     </>
 
     );
}

export default CenterPage;

  CenterPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type='centers'  title='Best Centers in the NBA' tagline='the best rebounders, blockers, and paint scorers' >
        {page} 
      </ContentPageLayout>
    )
  }
