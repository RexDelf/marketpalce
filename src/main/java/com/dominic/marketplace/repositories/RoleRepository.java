package com.dominic.marketplace.repositories;

import com.dominic.marketplace.models.ERole;
import com.dominic.marketplace.models.Role;
import com.dominic.marketplace.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}