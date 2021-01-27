package com.thaisoftplus.mk.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.thaisoftplus.mk.business.UserAccountBusiness;
import com.thaisoftplus.mk.jpa.entity.UserAccount;

public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserAccountBusiness userAccountBusiness;

    @Override
    public UserDetails loadUserByUsername(String username) {
        UserAccount userAccount = userAccountBusiness.getUserAccountByUsername(username);

        if (userAccount == null) {
            throw new UsernameNotFoundException("Could not find user");
        }

        return new MyUserDetails(userAccount);
    }

}
