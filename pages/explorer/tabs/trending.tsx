import type { NextPage } from 'next'
import React from 'react'
import RankingTrendings from '../../../components/explorer/ranking-trendings'
import ExplorerLayout from '../../../components/layouts/explorer-layout'
import SidebarLayout from '../../../components/layouts/sidebar-layout'

const Trending: NextPage = () => {
  return (
    <SidebarLayout searchBar={false} hCard={false} fCard={true}>
      <ExplorerLayout>
        <div className='mt-20 py-2 px-3'>
          <h1 className='text-xl tracking-tighter font-bold'>
            Top Trends
          </h1>
        </div>
        <RankingTrendings
          link=''
          ranking={1}
          topic='Politics'
          content='Mr President is incredible'
          tweets={64000}
        />
        <RankingTrendings
          link=''
          ranking={2}
          topic=''
          content="#IDon'tKnow"
          tweets={45000}
        />
        <RankingTrendings
          link=''
          ranking={3}
          topic=''
          content='Fake news'
          tweets={40000}
        />
        <RankingTrendings
          link=''
          ranking={4}
          topic='Fashion'
          content='Duckit'
          tweets={38000}
        />
        <RankingTrendings
          link=''
          ranking={5}
          topic='Entertainment'
          content='Ducks in space'
          tweets={35500}
        />
        <RankingTrendings
          link=''
          ranking={6}
          topic='Politics'
          content='Mr Duck is angry'
          tweets={33000}
        />
        <RankingTrendings
          link=''
          ranking={7}
          topic='Movies & TV'
          content='Everyone Will Die Today'
          tweets={30000}
        />
        <RankingTrendings
          link=''
          ranking={8}
          topic=''
          content='#DucksForEver'
          tweets={29000}
        />
        <RankingTrendings
          link=''
          ranking={9}
          topic=''
          content='Tonny Delb'
          tweets={28700}
        />
        <RankingTrendings
          link=''
          ranking={10}
          topic='Football'
          content='Roberto phenomenon'
          tweets={25000}
        />
        <RankingTrendings
          link=''
          ranking={11}
          topic='Food'
          content='Ducks are off the menu'
          tweets={24000}
        />
        <RankingTrendings
          link=''
          ranking={12}
          topic='News'
          content='Ducks have envolved'
          tweets={22900}
        />
        <RankingTrendings
          link=''
          ranking={13}
          topic=''
          content='#MonkeysWillRuleTheWorld'
          tweets={21000}
        />
        <RankingTrendings
          link=''
          ranking={14}
          topic='Outdoors'
          content='Woodpecker'
          tweets={19700}
        />
        <RankingTrendings
          link=''
          ranking={15}
          topic='Technology'
          content='Hackers crashing economy'
          tweets={18000}
        />
        <RankingTrendings
          link=''
          ranking={16}
          topic='Nature'
          content='Volcano explodes'
          tweets={15000}
        />
        <RankingTrendings
          link=''
          ranking={17}
          topic=''
          content='#NoToTheMonkeyPresident'
          tweets={13400}
        />
        <RankingTrendings
          link=''
          ranking={18}
          topic='Movies & TV'
          content='Twiduck'
          tweets={12600}
        />
        <RankingTrendings
          link=''
          ranking={19}
          topic='Games'
          content='The Legend of the Hero 2: The March of Malachi'
          tweets={10000}
        />
        <RankingTrendings
          link=''
          ranking={20}
          topic=''
          content='Ducks vs Monkeys'
          tweets={9570}
        />
        <RankingTrendings
          link=''
          ranking={21}
          topic='Politics'
          content='Mr. Woodpecker made his speech'
          tweets={9258}
        />
        <RankingTrendings
          link=''
          ranking={22}
          topic=''
          content='Mr. Woodpecker was seen in a casino'
          tweets={8056}
        />
        <RankingTrendings
          link=''
          ranking={23}
          topic='Games'
          content='Arcades are open again'
          tweets={7825}
        />
        <RankingTrendings
          link=''
          ranking={24}
          topic='Entertainment'
          content='Mr President opened an amusement park where ducks are prohibited'
          tweets={7390}
        />
        <RankingTrendings
          link=''
          ranking={25}
          topic=''
          content='#O_o'
          tweets={6203}
        />
        <RankingTrendings
          link=''
          ranking={26}
          topic='Science'
          content='Cure against nothing was found'
          tweets={5390}
        />
        <RankingTrendings
          link=''
          ranking={27}
          topic='Politics'
          content='Democracy'
          tweets={4277}
        />
        <RankingTrendings
          link=''
          ranking={28}
          topic=''
          content='#WoodpeckerToPresident'
          tweets={3026}
        />
        <RankingTrendings
          link=''
          ranking={29}
          topic='Science'
          content='The sun will explode'
          tweets={2500}
        />
      </ExplorerLayout>
    </SidebarLayout>
  )
}

export default Trending
