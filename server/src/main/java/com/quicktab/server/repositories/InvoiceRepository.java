package com.quicktab.server.repositories;

import com.quicktab.server.models.Invoice;
import com.quicktab.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvoiceRepository  extends JpaRepository<Invoice,Long> {


    List<Invoice> findByUser(User user);
}
