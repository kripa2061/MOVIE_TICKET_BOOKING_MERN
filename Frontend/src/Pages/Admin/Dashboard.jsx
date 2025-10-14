import React, { useEffect, useState } from 'react';
import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, Users2Icon, Loader, StarIcon } from 'lucide-react';
import { dummyDashboardData } from '../../assets-3/assets';
import BlurCircle from '../../Component/BlurCircle';
import './Dashboard.css';
import { dateFormat } from '../../lib/DateFormat';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    totalUser: 0,
    activeShows: []
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
    setLoading(false);
  }

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const stats = [
    { title: "Total Booking", value: dashboardData.totalBookings, icon: ChartLineIcon },
    { title: "Total Revenue", value: dashboardData.totalRevenue, icon: CircleDollarSignIcon },
    { title: "Active Shows", value: dashboardData.activeShows.length, icon: PlayCircleIcon },
    { title: "Total User", value: dashboardData.totalUser, icon: Users2Icon }
  ];

  return (
    <>
      {loading ? (
        <div className="adm-loader">
          <Loader />
        </div>
      ) : (
        <div className="adm-dashboard">
          <h2 className="adm-dashboard-title">Admin Dashboard</h2>

          <BlurCircle top="100px" left="100px" size="400px" blur="190px" />
          <BlurCircle top="50%" left="50%" size="600px" blur="500px" />

          <div className="adm-stats-container">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="adm-stat-box">
                  <div className="adm-stat-text">
                    <p className="adm-stat-value">{stat.value}</p>
                    <p className="adm-stat-title">{stat.title}</p>
                  </div>
                  <StatIcon className="adm-stat-icon" />
                </div>
              )
            })}
          </div>

          <p className="adm-section-title">Active Shows</p>
          <div className="adm-active-shows">
            {dashboardData.activeShows.map((show) => (
              <div key={show._id} className="adm-show-box">
                <img src={show.movie.poster_path} alt={show.movie.title} className="adm-show-image"/>
                <p className="adm-show-title">{show.movie.title}</p>
                <div className="adm-show-price-rating">
                  <p className="adm-show-price">{show.showPrice}</p>
                  <div className="adm-show-rating">
                    <StarIcon className="adm-show-star-icon"/>
                    {show.movie.vote_average.toFixed(1)}
                  </div>
                </div>
                <p className="adm-show-date">{dateFormat(show.showDateTime)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard;
