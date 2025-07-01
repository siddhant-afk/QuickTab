package com.quicktab.server.repositories;

import com.quicktab.server.models.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository  extends JpaRepository<Invoice,Long> {

}
