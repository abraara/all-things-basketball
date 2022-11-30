import ContentPageLayout from '../components/layouts/ContentPageLayout';

function SmallForwardPage() {
    return ( 
        <>
        <main>

            
        </main>
        
        </> 

    );
}

export default SmallForwardPage;

SmallForwardPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type="small forwards"
      title="The Best Small Forwards in the NBA"
      tagline="the most fearless, strong, and quick players" >
        {page} 
      </ContentPageLayout>
    )
  }