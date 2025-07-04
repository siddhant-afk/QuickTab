package com.quicktab.server.repositories;

import com.quicktab.server.models.Customer;
import com.quicktab.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository  extends JpaRepository<Customer,Long> {
    List<Customer> findByUser(User user);
}
