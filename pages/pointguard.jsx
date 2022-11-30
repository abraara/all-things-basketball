import ContentPageLayout from '../components/layouts/ContentPageLayout';

function PointGuardPage() {
    return ( 
        <>
        <main>

            
        </main>
        
        </> 

    );
}

export default PointGuardPage;

PointGuardPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type="point guards"
      title="Best Point Guards in the NBA"
      tagline="the best passers and ball handlers" >
        {page} 
      </ContentPageLayout>
    )
  }
