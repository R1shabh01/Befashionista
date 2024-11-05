package befashionista.app_backend.Services;

import befashionista.app_backend.Models.UserPrincipal;
import befashionista.app_backend.Models.Users;
import befashionista.app_backend.Repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepo.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("not found");
        }
        return new UserPrincipal(user);
    }

}
