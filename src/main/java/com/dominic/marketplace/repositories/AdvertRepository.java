package com.dominic.marketplace.repositories;

import com.dominic.marketplace.models.Advert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdvertRepository extends JpaRepository<Advert, Long> {

}
