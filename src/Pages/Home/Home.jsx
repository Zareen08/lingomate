import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import StatsSection from '../Stats/StatsSection';
import HowItWorks from '../HowItWorks/HowItWorks';
import WhyChoose from '../WhyChoose/WhyChoose';
import { Link, useLoaderData } from 'react-router';
import LangCards from '../LangCards/LangCards';

const Home = () => {
    const initialCats = useLoaderData();
    const [langs, setLang] = useState(initialCats);

    console.log(langs);
    return (
        <div>
            <Banner></Banner>
            <StatsSection tutors={245} reviews={985} languages={32} users={1280} ></StatsSection>
            <div  className="max-w-6xl mx-auto px-4 text-center">
            <div className='p-12 text-center space-y-4'>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">Featured Languages</h1>
            </div>
               <>
                <div  className='mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ' >
                {
                    langs.map(lang=> <Link to={`/findtutors/${lang.title}`}>
                    <LangCards 
                    key={lang._id}
                    lang={lang} 
                    langs={langs}
                    setLang={setLang}
                    ></LangCards>
                    </Link>)
                }
                </div>
               </>
            </div>
            <HowItWorks></HowItWorks>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;