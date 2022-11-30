import ContentPageLayout from '../components/layouts/ContentPageLayout';

function ShootingGuardPage() {
    return ( 
        <>
        <main>

            
        </main>
        
        </> 

    );
}

export default ShootingGuardPage;

ShootingGuardPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout type="shooting guards"
      title="Best Shooting Guards in the NBA"
      tagline="the best 3 point shooters with lethal accuracy" >
        {page} 
      </ContentPageLayout>
    )
  }