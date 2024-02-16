import React from 'react'
import { UpdatesData } from '../../Data/Data'
import './Updates.css'

const Update = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update, index) => {
        return (
          <div className="update">
            <img src={update.img} alt=""/>
            <div className="noti">
              <div>
                  <span>{update.name}</span>
                  <span>{update.noti}</span>
              </div>
            </div>
            <div>
                <span>{update.time}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Update