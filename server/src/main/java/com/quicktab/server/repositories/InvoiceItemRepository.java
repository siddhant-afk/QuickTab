package com.quicktab.server.repositories;

import com.quicktab.server.models.InvoiceItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InvoiceItemRepository extends JpaRepository<InvoiceItem,Long> {
    List<InvoiceItem> findByInvoiceId(Long invoiceId);
}
