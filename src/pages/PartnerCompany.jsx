import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark, faScrewdriverWrench, faChevronDown, faLocationDot, faBuilding } from '@fortawesome/free-solid-svg-icons'

// css
import '../styles/partnerCompany.css'

function PartnerCompany() {
    return (
        <div id='partnerCompany'>
            <div className="data-container"></div>
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