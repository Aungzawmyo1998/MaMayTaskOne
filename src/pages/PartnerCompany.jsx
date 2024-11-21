import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark, faScrewdriverWrench, faChevronDown, faLocationDot, faBuilding, faHandshake, faBars, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf } from '@fortawesome/free-regular-svg-icons'

// css
import '../styles/partnerCompany.css'

function PartnerCompany() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab_number) => {
        setToggleState(tab_number)
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
                    <div className={ toggleState === 1 ? "active-content all-content" : " all-content"}>Content One</div>
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
                                <div className="data">
                                    <div className="display"></div>
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
                                    <div className="display"></div>
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
                                        <input type="checkbox" id='underway' className='select' />
                                        <label className='label' htmlFor="underway">案件募集中</label>
                                    </div>
                                    <div className="row">
                                        <input type="checkbox" id='people' className='select' />
                                        <label className='label' htmlFor="people">求人募集中</label>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="type">利用目的</div>
                                <div className="check-container">
                                    <div className="row">
                                        <input type="checkbox" id='order' className='select' />
                                        <label className='label' htmlFor="order">発注</label>
                                    </div>
                                    <div className="row">
                                        <input type="checkbox" id='orders' className='select' />
                                        <label className='label' htmlFor="orders">受注</label>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="type">フォロー</div>
                                <div className="check-container">
                                    <div className="row">
                                        <input type="checkbox" id='following' className='select' />
                                        <label className='label' htmlFor="following">フォロー中</label>
                                    </div>
                                    <div className="row">
                                        <input type="checkbox" id='follower' className='select' />
                                        <label className='label' htmlFor="follower">フォロワー</label>
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