import type { NextPage } from 'next'
import React from 'react'
import RankingTrendings from '../../../components/explorer/ranking-trendings'
import ExplorerLayout from '../../../components/layouts/explorer-layout'
import Layout from '../../../components/layouts/layout'

const Trending: NextPage = () => {
  return (
    <Layout searchBar={false} hCard={false} fCard={true} stickyPosition={0}>
      <ExplorerLayout path='/explorer/tabs/trending'>
        <div className='mt-20 py-2 px-3'>
          <h1 className='text-xl tracking-tighter font-bold'>
            Top Trends
          </h1>
        </div>
        <RankingTrendings
          link='/search?q=%22Mr%20President%20is%20incredible%22'
          ranking={1}
          topic='Politics'
          content='Mr President is incredible'
          tweets={64000}
        />
        <RankingTrendings
          link='/search?q=%23IDon%27tKnow'
          ranking={2}
          topic=''
          content="#IDon'tKnow"
          tweets={45000}
        />
        <RankingTrendings
          link='/search?q=%22Fake%20news%22'
          ranking={3}
          topic=''
          content='Fake news'
          tweets={40000}
        />
        <RankingTrendings
          link='/search?q=Duckit'
          ranking={4}
          topic='Fashion'
          content='Duckit'
          tweets={38000}
        />
        <RankingTrendings
          link='/search?q=%22Ducks%20in%20space%22'
          ranking={5}
          topic='Entertainment'
          content='Ducks in space'
          tweets={35500}
        />
        <RankingTrendings
          link='/search?q=%22Mr%20Duck%20is%20angry%22'
          ranking={6}
          topic='Politics'
          content='Mr Duck is angry'
          tweets={33000}
        />
        <RankingTrendings
          link='/search?q=%22Everyone%20Will%20Die%20Today%22'
          ranking={7}
          topic='Movies & TV'
          content='Everyone Will Die Today'
          tweets={30000}
        />
        <RankingTrendings
          link='/search?q=%23DucksForEver'
          ranking={8}
          topic=''
          content='#DucksForEver'
          tweets={29000}
        />
        <RankingTrendings
          link='/search?q=%22Tonny%20Delb%22'
          ranking={9}
          topic=''
          content='Tonny Delb'
          tweets={28700}
        />
        <RankingTrendings
          link='/search?q=%22Roberto%20phenomenon%22'
          ranking={10}
          topic='Football'
          content='Roberto phenomenon'
          tweets={25000}
        />
        <RankingTrendings
          link='/search?q=%22Ducks%20are%20off%20the%20menu%22'
          ranking={11}
          topic='Food'
          content='Ducks are off the menu'
          tweets={24000}
        />
        <RankingTrendings
          link='/search?q=%22Ducks%20have%20envolved%22'
          ranking={12}
          topic='News'
          content='Ducks have envolved'
          tweets={22900}
        />
        <RankingTrendings
          link='/search?q=%23MonkeysWillRuleTheWorld'
          ranking={13}
          topic=''
          content='#MonkeysWillRuleTheWorld'
          tweets={21000}
        />
        <RankingTrendings
          link='/search?q=Woodpecker'
          ranking={14}
          topic='Outdoors'
          content='Woodpecker'
          tweets={19700}
        />
        <RankingTrendings
          link='/search?q=%22hackers%20crashing%20economy%22'
          ranking={15}
          topic='Technology'
          content='Hackers crashing economy'
          tweets={18000}
        />
        <RankingTrendings
          link='/search?q=%22Volcano%20explodes%22'
          ranking={16}
          topic='Nature'
          content='Volcano explodes'
          tweets={15000}
        />
        <RankingTrendings
          link='/search?q=%23NoToTheMonkeyPresident'
          ranking={17}
          topic=''
          content='#NoToTheMonkeyPresident'
          tweets={13400}
        />
        <RankingTrendings
          link='/search?q=Twiduck'
          ranking={18}
          topic='Movies & TV'
          content='Twiduck'
          tweets={12600}
        />
        <RankingTrendings
          link='/search?q=%22The%20Legend%20of%20the%20Hero%20%32%3A%20The%20March%20of%20Malachi%22'
          ranking={19}
          topic='Games'
          content='The Legend of the Hero 2: The March of Malachi'
          tweets={10000}
        />
        <RankingTrendings
          link='/search?q=%22Ducks%20vs%20Monkeys%22'
          ranking={20}
          topic=''
          content='Ducks vs Monkeys'
          tweets={9570}
        />
        <RankingTrendings
          link='/search?q=%22Mr%2E%20Woodpecker%20made%20his%20speech%22'
          ranking={21}
          topic='Politics'
          content='Mr. Woodpecker made his speech'
          tweets={9258}
        />
        <RankingTrendings
          link='/search?q=%22Mr%2E%20Woodpecker%20was%20see%20in%20a%20casino%22'
          ranking={22}
          topic=''
          content='Mr. Woodpecker was seen in a casino'
          tweets={8056}
        />
        <RankingTrendings
          link='/search?q=%22Arcades%20are%20open%20again%22'
          ranking={23}
          topic='Games'
          content='Arcades are open again'
          tweets={7825}
        />
        <RankingTrendings
          link='/search?q=%22Mr%20President%20opened%20an%20amusement%20park%20where%20ducks%20are%20prohibited%22'
          ranking={24}
          topic='Entertainment'
          content='Mr President opened an amusement park where ducks are prohibited'
          tweets={7390}
        />
        <RankingTrendings
          link='/search?=%23O%5Fo'
          ranking={25}
          topic=''
          content='#O_o'
          tweets={6203}
        />
        <RankingTrendings
          link='/search?q=%22Cure%20against%20nothing%20was%20found%22'
          ranking={26}
          topic='Science'
          content='Cure against nothing was found'
          tweets={5390}
        />
        <RankingTrendings
          link='/search?q=Democracy'
          ranking={27}
          topic='Politics'
          content='Democracy'
          tweets={4277}
        />
        <RankingTrendings
          link='/search?q=%23WoodpeckerToPresident'
          ranking={28}
          topic=''
          content='#WoodpeckerToPresident'
          tweets={3026}
        />
        <RankingTrendings
          link='/search?q=%22The%20sun%20will%20explode%22'
          ranking={29}
          topic='Science'
          content='The sun will explode'
          tweets={2500}
        />
      </ExplorerLayout>
    </Layout>
  )
}

export default Trending
