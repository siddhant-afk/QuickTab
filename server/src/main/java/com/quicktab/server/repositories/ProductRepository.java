package com.quicktab.server.repositories;

import com.quicktab.server.models.Product;
import com.quicktab.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findByUser(User currentUser);
}
