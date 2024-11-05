package befashionista.app_backend.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity // it is used tell spring to not use default config and use the one i am mentioning
public class SecurityConfig {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(x->x.disable())//it is used to disable csrf
                .authorizeHttpRequests(request -> request.anyRequest().authenticated())
                    //to make sure only authenticated request are entertained
                //.formLogin(Customizer.withDefaults())//to handle login from website with the help of form
                .httpBasic(Customizer.withDefaults())//to handle rest requests or postman requests
                .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//                .headers().frameOptions().disable();
                .headers(x->x.frameOptions(y->y.disable()));
        return http.build();
    }
    //it is used to provide user details hardcoded
/*    @Bean
    public UserDetailsService userDetailsService(){
        UserDetails user1 = User
                .withDefaultPasswordEncoder()
                .username("rajeev")
                .password("rajeev")
                .roles("USER")
                .build();
        return new InMemoryUserDetailsManager(user1);
    }*/
    //now by default spring uses a authentication provider so we are providing our authentication provider
    //so that we can take user details from database

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
        provider.setUserDetailsService(userDetailsService);
        return provider;
    }
}
