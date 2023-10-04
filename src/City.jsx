import React from 'react'

const City = ({ data }) => {
    return (
        <div>
           
            {data != undefined && data.success === true ? (
          <table className="table table-striped">
             <h2>Hava Durumu  <b>{data.city}</b></h2>
            <thead>
              <tr>
                <th>Tarih</th>
                <th>Açıklama</th>
                <th>En Yüksek Sıcaklık (°C)</th>
                <th>En Düşük Sıcaklık (°C)</th>
                <th>Gece Sıcaklık (°C)</th>
                <th>Nem (%)</th>
              </tr>
            </thead>
            <tbody>
              {data.result.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}, {item.date}</td>
                  <td>{item.description}</td>
                  <td>{item.max}°C</td>
                  <td>{item.min}°C</td>
                  <td>{item.night}°C</td>
                  <td>{item.humidity}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Veri bulunamadı veya yükleniyor...</p>
        )}
        </div>
    )
}

export default City