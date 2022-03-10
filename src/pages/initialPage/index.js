import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeButton from '../../components/homeButton';
import { colors } from '../../utils/themeColors';
import { MyContext } from '../../contexts/context';
import { HomeBtnStyle, PageHeadStyle, MainStyle, ThemeBtnStyle } from './initialPage.style';

const InitialPage = () => {
    const value = useContext(MyContext);
    const { setCounter, counter } = value;

    const changeColor = () => {
        if(counter > 2) setCounter(0)
        else setCounter(counter+1)
    }

    return (
        <MainStyle bg={colors[counter].pageBg}>
            <PageHeadStyle headText={colors[counter].headText}>
                <div className="wrapper">
                    <span className="user-heading icon">user heading</span>
                    <h1><Link to="/" title="Company X">Company X</Link></h1>
                    <p>For internal use only.</p>
                </div>
            </PageHeadStyle>
            <ThemeBtnStyle onClick={changeColor}>Toggle Theme</ThemeBtnStyle>
            <HomeBtnStyle listBg={colors[counter].listBg}>
                <div className="wrapper">
                    <ul>
                        <HomeButton link={'/logShift'} color={'#1C77F4'} text={'Log Weekly Shift'} />
                        <HomeButton link={'/scheduleTable'} color={'#1C77F4'} text={'Employee Schedule Table'} />
                        <HomeButton link={'/assignTask'} color={'#34a853'} text={'Assign Task'} />
                        <HomeButton link={'taskList'} color={'#34a853'} text={'Employee Task List'} />
                    </ul>
                </div>
            </HomeBtnStyle>
        </MainStyle>
    )
}

export default InitialPage