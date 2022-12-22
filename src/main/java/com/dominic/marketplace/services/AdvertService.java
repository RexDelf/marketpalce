package com.dominic.marketplace.services;

import com.dominic.marketplace.models.Advert;
import com.dominic.marketplace.models.AdvertImage;
import org.springframework.data.domain.Page;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

public interface AdvertService {
    Page<Advert> findAll(Integer pageNumber, Integer pageSize);

    Optional<Advert> findById(Long id);

    void save(Advert advert);

    void deleteById(Long id);
}
