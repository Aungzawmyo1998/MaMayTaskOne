import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMagnifyingGlass, faXmark, faScrewdriverWrench, faChevronDown, faChevronRight ,faLocationDot, faBuilding, faHandshake, faBars, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

// component 
import ConstructionModal from '../modals/ConstructionModal'

// css
import '../styles/partnerCompany.css'
// image
import profile_image from '../assets/images/company-profile/profile.jpg'

function PartnerCompany() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab_number) => {
        setToggleState(tab_number)
    }

    // construction open modal
    const [ openConstModal, setOpenConstModal ] = useState(false);
    const [testState, setTestState] = useState(false);
    const constOpenModal = (e) => {
        e.stopPropagation();
            setOpenConstModal(true);
        }
    
        

    return (
        <div id='partnerCompany'>
            <div className="data-container">
                <div className="data-header">
                    <div className='right-side'>
                        <div className="group">
                            全12,345件
                        </div>
                        <div>
                            <select className='select-type'>
                                <option value="">全て</option>
                                <option value="">募集中</option>
                                <option value="">募集終了</option>
                            </select>
                        </div>
                    </div>
                    <div className="tabs-container">
                        <div onClick={()=> {toggleTab(1)}} className={ toggleState === 1 ? "active-tab tab" : "tab" } >全て</div>
                        <div onClick={()=> {toggleTab(2)}} className={ toggleState === 2 ? "active-tab tab" : "tab" }> <FontAwesomeIcon className='icon' icon={faHandshake} /> 協力会社</div>
                        <div onClick={()=> {toggleTab(3)}} className={ toggleState === 3 ? "active-tab tab" : "tab" }><FontAwesomeIcon className='icon' icon={faHourglassHalf} /> 許可待ち</div>
                        <div onClick={()=> {toggleTab(4)}} className={ toggleState === 4 ? "active-tab tab" : "tab" }> 
                            <div className="confirmation-icon">
                                <FontAwesomeIcon className='icon' icon={faBars} />
                                <FontAwesomeIcon className='bars-icon' icon={faCheck} />
                            </div> 
                            申請確認
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <div className={ toggleState === 1 ? "active-content all-content" : " all-content"}>
                        <div className="content-row">
                            <div className="profile-container">
                                <img className='profile-img' src={profile_image} alt="" />
                            </div>
                            <div className="all-content-data">
                                <div className="all-content-header">
                                    <div className="company-name">
                                        株式会社片山塗装
                                    </div>
                                    <div className="right-side">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className='icon' icon={faGlobe} />
                                            <FontAwesomeIcon className='icon' icon={faYoutube} />
                                        </div>
                                        <div className="order-container">
                                            <button className='orders'>受注</button>
                                            <button className='order'>発注</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-text">
                                電気通信工事と清掃施設工事に専念し、通信ネットワークと清潔な環境を維持し、地域の快適さをサポートします。我々は高度な技術と革新的なアプローチを駆使し、モダンな通信インフラストラクチャーを提供します。同時に、清潔な環境づくりに取り …
                                </div>
                                <div className="detail-container">
                                    <div className="context-detail">
                                        <div className="detail-location-row">
                                            <div className="location">
                                                <FontAwesomeIcon className='icon' icon={faLocationDot} />
                                                <span> 愛知県稲沢市 </span>
                                            </div>
                                            <div className="tool">
                                                <FontAwesomeIcon className='icon' icon={faScrewdriverWrench} />
                                                <span> 建築一式工事業 大工工事業 </span>
                                            </div>
                                        </div>
                                        <div className="detail-type">
                                            <div className="grid-item">
                                                <span>エリア</span><span>:</span><span>新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県</span>
                                            </div>
                                            <div className="grid-item">
                                                <span>工種</span><span>:</span><span>鳶 (足場)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company">
                                        <button>協力会社の申請</button>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="next">
                                <FontAwesomeIcon className='icon' icon={faChevronRight} />
                            </div>
                        </div>
                        <div className="content-row">
                            <div className="profile-container">
                                <img className='profile-img' src={profile_image} alt="" />
                            </div>
                            <div className="all-content-data">
                                <div className="all-content-header">
                                    <div className="company-name">
                                        株式会社片山塗装
                                    </div>
                                    <div className="right-side">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className='icon' icon={faGlobe} />
                                            <FontAwesomeIcon className='icon' icon={faYoutube} />
                                        </div>
                                        <div className="order-container">
                                            <button className='orders'>受注</button>
                                            <button className='order'>発注</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-text">
                                電気通信工事と清掃施設工事に専念し、通信ネットワークと清潔な環境を維持し、地域の快適さをサポートします。我々は高度な技術と革新的なアプローチを駆使し、モダンな通信インフラストラクチャーを提供します。同時に、清潔な環境づくりに取り …
                                </div>
                                <div className="detail-container">
                                    <div className="context-detail">
                                        <div className="detail-location-row">
                                            <div className="location">
                                                <FontAwesomeIcon className='icon' icon={faLocationDot} />
                                                <span> 愛知県稲沢市 </span>
                                            </div>
                                            <div className="tool">
                                                <FontAwesomeIcon className='icon' icon={faScrewdriverWrench} />
                                                <span> 建築一式工事業 大工工事業 </span>
                                            </div>
                                        </div>
                                        <div className="detail-type">
                                            <div className="grid-item">
                                                <span>エリア</span><span>:</span><span>新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県</span>
                                            </div>
                                            <div className="grid-item">
                                                <span>工種</span><span>:</span><span>鳶 (足場)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company">
                                        <button>協力会社の申請</button>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="next">
                                <FontAwesomeIcon className='icon' icon={faChevronRight} />
                            </div>
                        </div>
                        <div className="content-row">
                            <div className="profile-container">
                                <img className='profile-img' src={profile_image} alt="" />
                            </div>
                            <div className="all-content-data">
                                <div className="all-content-header">
                                    <div className="company-name">
                                        株式会社片山塗装
                                    </div>
                                    <div className="right-side">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className='icon' icon={faGlobe} />
                                            <FontAwesomeIcon className='icon' icon={faYoutube} />
                                        </div>
                                        <div className="order-container">
                                            <button className='orders'>受注</button>
                                            <button className='order'>発注</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-text">
                                電気通信工事と清掃施設工事に専念し、通信ネットワークと清潔な環境を維持し、地域の快適さをサポートします。我々は高度な技術と革新的なアプローチを駆使し、モダンな通信インフラストラクチャーを提供します。同時に、清潔な環境づくりに取り …
                                </div>
                                <div className="detail-container">
                                    <div className="context-detail">
                                        <div className="detail-location-row">
                                            <div className="location">
                                                <FontAwesomeIcon className='icon' icon={faLocationDot} />
                                                <span> 愛知県稲沢市 </span>
                                            </div>
                                            <div className="tool">
                                                <FontAwesomeIcon className='icon' icon={faScrewdriverWrench} />
                                                <span> 建築一式工事業 大工工事業 </span>
                                            </div>
                                        </div>
                                        <div className="detail-type">
                                            <div className="grid-item">
                                                <span>エリア</span><span>:</span><span>新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県</span>
                                            </div>
                                            <div className="grid-item">
                                                <span>工種</span><span>:</span><span>鳶 (足場)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company">
                                        <button>協力会社の申請</button>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="next">
                                <FontAwesomeIcon className='icon' icon={faChevronRight} />
                            </div>
                        </div>
                        <div className="content-row">
                            <div className="profile-container">
                                <img className='profile-img' src={profile_image} alt="" />
                            </div>
                            <div className="all-content-data">
                                <div className="all-content-header">
                                    <div className="company-name">
                                        株式会社片山塗装
                                    </div>
                                    <div className="right-side">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className='icon' icon={faGlobe} />
                                            <FontAwesomeIcon className='icon' icon={faYoutube} />
                                        </div>
                                        <div className="order-container">
                                            <button className='orders'>受注</button>
                                            <button className='order'>発注</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-text">
                                電気通信工事と清掃施設工事に専念し、通信ネットワークと清潔な環境を維持し、地域の快適さをサポートします。我々は高度な技術と革新的なアプローチを駆使し、モダンな通信インフラストラクチャーを提供します。同時に、清潔な環境づくりに取り …
                                </div>
                                <div className="detail-container">
                                    <div className="context-detail">
                                        <div className="detail-location-row">
                                            <div className="location">
                                                <FontAwesomeIcon className='icon' icon={faLocationDot} />
                                                <span> 愛知県稲沢市 </span>
                                            </div>
                                            <div className="tool">
                                                <FontAwesomeIcon className='icon' icon={faScrewdriverWrench} />
                                                <span> 建築一式工事業 大工工事業 </span>
                                            </div>
                                        </div>
                                        <div className="detail-type">
                                            <div className="grid-item">
                                                <span>エリア</span><span>:</span><span>新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県</span>
                                            </div>
                                            <div className="grid-item">
                                                <span>工種</span><span>:</span><span>鳶 (足場)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company">
                                        <button>協力会社の申請</button>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="next">
                                <FontAwesomeIcon className='icon' icon={faChevronRight} />
                            </div>
                        </div>
                        <div className="content-row">
                            <div className="profile-container">
                                <img className='profile-img' src={profile_image} alt="" />
                            </div>
                            <div className="all-content-data">
                                <div className="all-content-header">
                                    <div className="company-name">
                                        株式会社片山塗装
                                    </div>
                                    <div className="right-side">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className='icon' icon={faGlobe} />
                                            <FontAwesomeIcon className='icon' icon={faYoutube} />
                                        </div>
                                        <div className="order-container">
                                            <button className='orders'>受注</button>
                                            <button className='order'>発注</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-text">
                                電気通信工事と清掃施設工事に専念し、通信ネットワークと清潔な環境を維持し、地域の快適さをサポートします。我々は高度な技術と革新的なアプローチを駆使し、モダンな通信インフラストラクチャーを提供します。同時に、清潔な環境づくりに取り …
                                </div>
                                <div className="detail-container">
                                    <div className="context-detail">
                                        <div className="detail-location-row">
                                            <div className="location">
                                                <FontAwesomeIcon className='icon' icon={faLocationDot} />
                                                <span> 愛知県稲沢市 </span>
                                            </div>
                                            <div className="tool">
                                                <FontAwesomeIcon className='icon' icon={faScrewdriverWrench} />
                                                <span> 建築一式工事業 大工工事業 </span>
                                            </div>
                                        </div>
                                        <div className="detail-type">
                                            <div className="grid-item">
                                                <span>エリア</span><span>:</span><span>新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県</span>
                                            </div>
                                            <div className="grid-item">
                                                <span>工種</span><span>:</span><span>鳶 (足場)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company">
                                        <button>協力会社の申請</button>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="next">
                                <FontAwesomeIcon className='icon' icon={faChevronRight} />
                            </div>
                        </div>
                        <div className="content-row">
                            <div className="profile-container">
                                <img className='profile-img' src={profile_image} alt="" />
                            </div>
                            <div className="all-content-data">
                                <div className="all-content-header">
                                    <div className="company-name">
                                        株式会社片山塗装
                                    </div>
                                    <div className="right-side">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className='icon' icon={faGlobe} />
                                            <FontAwesomeIcon className='icon' icon={faYoutube} />
                                        </div>
                                        <div className="order-container">
                                            <button className='orders'>受注</button>
                                            <button className='order'>発注</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-text">
                                電気通信工事と清掃施設工事に専念し、通信ネットワークと清潔な環境を維持し、地域の快適さをサポートします。我々は高度な技術と革新的なアプローチを駆使し、モダンな通信インフラストラクチャーを提供します。同時に、清潔な環境づくりに取り …
                                </div>
                                <div className="detail-container">
                                    <div className="context-detail">
                                        <div className="detail-location-row">
                                            <div className="location">
                                                <FontAwesomeIcon className='icon' icon={faLocationDot} />
                                                <span> 愛知県稲沢市 </span>
                                            </div>
                                            <div className="tool">
                                                <FontAwesomeIcon className='icon' icon={faScrewdriverWrench} />
                                                <span> 建築一式工事業 大工工事業 </span>
                                            </div>
                                        </div>
                                        <div className="detail-type">
                                            <div className="grid-item">
                                                <span>エリア</span><span>:</span><span>新潟県 富山県 石川県 福井県 山梨県 長野県 岐阜県 静岡県 愛知県</span>
                                            </div>
                                            <div className="grid-item">
                                                <span>工種</span><span>:</span><span>鳶 (足場)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="company">
                                        <button>協力会社の申請</button>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="next">
                                <FontAwesomeIcon className='icon' icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                    <div className={ toggleState === 2 ? "active-content partner-content" : " partner-content"}>Content two</div>
                    <div className={ toggleState === 3 ? "active-content permission-content" : " permission-content"}>Content three</div>
                    <div className={ toggleState === 4 ? "active-content confirmation-content" : "confirmation-content"}>Content four</div>
                </div>
            </div>
            <div className="search-container">
                <div className="search-bar">
                    <div className="search-icon">
                        <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                    </div>
                    <input type="text" className='search-text' placeholder='検索キーワード' />
                    <div className="cancel-icon">
                        <FontAwesomeIcon className='icon' icon={faXmark} />
                    </div>
                </div>

                <div className="filter-container">
                    <div className="filter-header">
                        <span className="head-text">絞り込み条件</span>
                        <span className='text'>絞り込み条件を設定してください。</span>
                    </div>

                    <hr />

                    <div className="filter-type">
                        <div className="icon">
                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </div>
                        <div className="data-container">
                                <div className="type"> 工事種別を選択 </div>
                                <ConstructionModal open={openConstModal} onClose={() => setOpenConstModal(false)} />
                                <div className="data" onClick={constOpenModal}>
                                    <div className="display" >
                                            <span>--複数選択可能--</span>
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faXmark} />
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="filter-type">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <div className="data-container">
                                <div className="type"> 地域を選択 </div>
                                <div className="data">
                                    <div className="display">
                                        <span>--複数選択可能--</span>
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faXmark} />
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="filter-type">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBuilding} />
                        </div>
                        <div className="data-type">
                            <div className="item">
                                <div className="type">現在の状況</div>
                                <div className="check-container">
                                    <div className="row">
                                        <label className='label' htmlFor="underway">案件募集中
                                            <input type="checkbox" id='underway' className='select' />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <label className='label' htmlFor="people">求人募集中
                                            <input type="checkbox" id='people' className='select' />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="type">利用目的</div>
                                <div className="check-container">
                                    <div className="row">
                                        <label className='label' htmlFor="order">発注
                                            <input type="checkbox" id='order' className='select' />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <label className='label' htmlFor="orders">受注
                                            <input type="checkbox" id='orders' className='select' />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="type">フォロー</div>
                                <div className="check-container">
                                    <div className="row">
                                        <label className='label' htmlFor="following">
                                            フォロー中
                                            <input type="checkbox" id='following' className='select' />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="row">
                                        <label className='label' htmlFor="follower">
                                            フォロワー
                                            <input type="checkbox" id='follower' className='select' />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default PartnerCompany