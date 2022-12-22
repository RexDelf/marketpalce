package com.dominic.marketplace.repositories;

import com.dominic.marketplace.models.Advert;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.print.Pageable;
import java.util.List;

public interface AdvertRepository extends JpaRepository<Advert, Long> {

}
