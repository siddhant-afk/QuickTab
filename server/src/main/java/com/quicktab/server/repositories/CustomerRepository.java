package com.quicktab.server.repositories;

import com.quicktab.server.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository  extends JpaRepository<Customer,Long> {
}
