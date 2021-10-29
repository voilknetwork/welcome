import { About, AffiliateSection, Faq, Features, SectionIntro, Services} from '../components'
import { HomeLayout } from '../layouts'

export default function Home() {


    return (
        <>
            <HomeLayout>
                <SectionIntro />
                <Services />
                <About />
                <Features />
                <AffiliateSection />
                <Faq />
            </HomeLayout>
        </>
    )
}
