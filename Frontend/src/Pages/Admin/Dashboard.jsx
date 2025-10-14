import React, { useEffect, useState } from 'react';
import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, Users2Icon, Loader, StarIcon } from 'lucide-react';
import { dummyDashboardData } from '../../assets-3/assets';
import BlurCircle from '../../Component/BlurCircle';
import './Dashboard.css';
import { dateFormat } from '../../lib/DateFormat';

const Layout = () => {
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

  const dashboardCards = [
    { title: "Total Booking", value: dashboardData.totalBookings, icon: ChartLineIcon },
    { title: "Total Revenue", value: dashboardData.totalRevenue, icon: CircleDollarSignIcon },
    { title: "Active Shows", value: dashboardData.activeShows.length, icon: PlayCircleIcon },
    { title: "Total User", value: dashboardData.totalUser, icon: Users2Icon }
  ];

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div className="dashboard-container">
          <h2>Admin Dashboard</h2>

          {/* Blur circles */}
          <BlurCircle top="100px" left="100px" size="400px" blur="190px" />
          <BlurCircle top="50%" left="50%" size="600px" blur="500px" />

          {/* Dashboard Cards */}
          <div className="dashboard-cards">
            {dashboardCards.map((card, index) => {
              const CardIcon = card.icon;
              return (
                <div key={index} className="card">
                  <div className="card-text">
                    <p className="card-value">{card.value}</p>
                    <p className="card-title">{card.title}</p>
                  </div>
                  <CardIcon className="card-icon" />
                </div>
              )
            })}
          </div>

          {/* Active Shows Section */}
          <p>Active Shows</p>
          <div className="active-shows">
            {dashboardData.activeShows.map((show) => (
              <div key={show._id} className="show-card">
                <img src={show.movie.poster_path} alt={show.movie.title} />
                <p>{show.movie.title}</p>
                <p>{show.showPrice}</p>
                <StarIcon  className='star-icon'/>
                {show.movie.vote_average.toFixed(1)}
                <p>{dateFormat(show.showDateTime)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Layout;
