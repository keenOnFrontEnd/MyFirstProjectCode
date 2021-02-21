import React from 'react';
import Paginator from '../../files/common/paginator/Paginator';
import User from './User';
import s from './Users.module.css';
let Users = ({currentPage, onPageChange, totalUsersCount, pageSize,users,followingInProgress,follow,unfollow,status}) => {


    return <div className={s.main_users_wrapper}>
     <div className={s.paginator}><Paginator currentPage={currentPage} onPageChange={onPageChange} totalUsersCount={totalUsersCount} pageSize={pageSize} /></div>
        <div className={s.users_wrapper}>{users.map(u =><User key={u.id} user={u} followingInProgress={followingInProgress} unfollow={unfollow} follow={follow}/>)}</div>

    </div>

}

export default Users;