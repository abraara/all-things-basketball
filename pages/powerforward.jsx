import ContentPageLayout from '../components/layouts/ContentPageLayout';

function PowerForwardPage() {
    return ( 
        <>
        <main>

            
        </main>
        
        </> 

    );
}

export default PowerForwardPage;

PowerForwardPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout  type="power forwards"
      title="The Best Power Forwards in the NBA"
      tagline="the most dependable, defensively strong scorers" >
        {page} 
      </ContentPageLayout>
    )
  }